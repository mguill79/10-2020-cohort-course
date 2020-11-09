var currentPosition = 0;

        var prevImage = function() {
            currentPosition = currentPosition + 472;
            document.getElementById('imageslider2').style.transform = 'translateX(' + currentPosition + 'px)'
        }

        var nextImage = function() {
            currentPosition = currentPosition - 472;
            document.getElementById('imageslider2').style.transform = 'translateX(' + currentPosition + 'px)'

        }