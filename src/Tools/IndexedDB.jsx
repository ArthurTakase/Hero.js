export class Database {
    constructor(dbName, objectStore) {
        this.db = null
        this.dbName = dbName
        this.objectStore = objectStore

        this.createDatabase()
    }

    async createDatabase() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName, 1)
    
            request.onerror = function(event) {
                console.error("An error occurred with IndexedDB")
                console.error(event)
                reject(event)
            }
        
            request.onupgradeneeded = () => {
                console.log("Database created successfully")
                this.db = request.result
                this.db.createObjectStore(this.objectStore, { keyPath: "id" })
            }
        
            request.onsuccess = () => {
                console.log("Database opened successfully")
                this.db = request.result
                const transaction = this.db.transaction(this.objectStore, "readwrite")
                transaction.objectStore(this.objectStore)
                resolve()
            }
        })
    }

    async addToDB(id, data) {
        if (this.db == null) await this.createDatabase()
        const transaction = this.db.transaction(this.objectStore, "readwrite")
        const store = transaction.objectStore(this.objectStore)
        store.put({ id, data })

        return new Promise((resolve, reject) => {
            transaction.oncomplete = () => {
                resolve()
            }

            transaction.onerror = (event) => {
                console.error("An error occurred with IndexedDB")
                console.error(event)
                reject(event)
            }
        })
    }

    async getAllFromDB() {
        if (this.db == null) await this.createDatabase()
        const transaction = this.db.transaction(this.objectStore, "readonly")
        const store = transaction.objectStore(this.objectStore)

        const request = store.getAll()

        return new Promise((resolve, reject) => {
            request.onerror = (event) => {
                console.error("An error occurred with IndexedDB")
                reject(event)
            }
            
            request.onsuccess = () => {
                resolve(request.result)
            }
        })
    }

    async clearDB() {
        if (this.db == null) await this.createDatabase()
        const transaction = this.db.transaction(this.objectStore, "readwrite")
        const store = transaction.objectStore(this.objectStore)
        store.clear()

        return new Promise((resolve, reject) => {
            transaction.oncomplete = () => {
                resolve()
            }

            transaction.onerror = (event) => {
                console.error("An error occurred with IndexedDB")
                console.error(event)
                reject(event)
            }
        })
    }
}

export const HeroDB = new Database("HeroDatabase", "games")