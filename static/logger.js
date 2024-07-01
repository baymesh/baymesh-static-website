$(document).ready(function () {
    function timeAgo(unixTime) {
        const now = new Date();
        const timeDifference = Math.floor((now - new Date(unixTime * 1000)) / 1000);

        let interval = Math.floor(timeDifference / 31536000);
        if (interval >= 1) return interval + " years ago";

        interval = Math.floor(timeDifference / 2592000);
        if (interval >= 1) return interval + " months ago";

        interval = Math.floor(timeDifference / 86400);
        if (interval >= 1) return interval + " days ago";

        interval = Math.floor(timeDifference / 3600);
        if (interval >= 1) return interval + " hours ago";

        interval = Math.floor(timeDifference / 60);
        if (interval >= 1) return interval + " minutes ago";

        return Math.floor(timeDifference) + " seconds ago";
    }

    $.ajax({
        url: '/sample.json', // Replace with your API URL
        method: 'GET',
        success: function (data) {
            data.forEach(function (item) {
                var timeAgoText = timeAgo(item.time);
                console.log(item.Shortname, item.msg, timeAgoText);
                var dataBlock = `
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" style="padding: 0px;">
                        <div class="logger-block">
                            <p>${item.msg}</p>
                            <small><a href="https://data.bayme.sh/node?id=${item.id}">${item.Shortname}</a> - <a href="https://meshview.armooo.net/packet/${item.pid}">${timeAgoText}</a></small>
                        </div>
                    </div>
                `;
                $('#logger-container').append(dataBlock);
            });
        },
        error: function (error) {
            console.error('Error fetching data:', error);
        }
    });
});
