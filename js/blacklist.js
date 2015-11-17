(function () {

    function blacklist() {
        this._started = false;
        uploader.prototype.start();

    }
    blacklist.prototype = {
        /**
         * Start to handle screenshot events.
         * @memberof Screenshot.prototype
         */
        start: function () {
            console.log("Blacklist: Ready to load");
            if (document.documentElement) {
                this._started = true;
                console.log("Blacklist: loaded.");
            } else {
                this._started = true;
                console.log("Blacklist: loaded.");
            }
        },
        /**
         * Stop handling screenshot events.
         * @memberof Screenshot.prototype
         */
        stop: function () {
            console.log("FXOS-Adblocker Stopped at: " + window.location);
            if (!this._started) {
                throw 'Blacklist was never start()\'ed but stop() is called.';
            }
            this._started = false;
        }

    }

    var blacklist = new blacklist();
}());