var discodog;
(function (discodog) {
    var Api = (function () {
        function Api() {
        }
        Api.post = function (endPoint, data, success, error) {
            var request = new XMLHttpRequest();
            request.open("POST", endPoint, true);
            request.onload = function (ev) {
                if (request.status == 200) {
                    success(request.responseText);
                }
                else {
                    error(request.responseText);
                }
            };
            request.onerror = function (ev) {
                error(request.responseText);
            };
            request.send(data);
            return request;
        };
        return Api;
    }());
    discodog.Api = Api;
})(discodog || (discodog = {}));
var discodog;
(function (discodog) {
    var DiscodogApp = (function () {
        function DiscodogApp() {
            var data = new FormData();
            data.append("test", "123");
            discodog.Api.post("api/test", data, function () {
                alert("great success");
            }, function () {
                alert("massive failure");
            });
        }
        return DiscodogApp;
    }());
    discodog.DiscodogApp = DiscodogApp;
})(discodog || (discodog = {}));
//# sourceMappingURL=code.js.map