function news() {
    const news = [
        {
            "title": "Patch Note #1",
            "date": "08/11/2021",
            "text": "<ul><li>Dialog preview.</li><li>Add a \"News & Updates\" page.</li><li>Fixed bugs related to checkboxes.</li><li>Fixed bugs related to the Restart effect.</li></ul>"
        }
    ]
    const section = document.getElementById('news')

    for (var i = news.length - 1; i != -1; i--) {
        section.innerHTML += '<div class="news">\
                                <div class="news-title">' + news[i].title + '</div>\
                                <div class="news-date">' + news[i].date + '</div>\
                                <div class="news-body">' + news[i].text + '</div>\
                            </div>'
    }
}