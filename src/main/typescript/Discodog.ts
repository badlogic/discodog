module discodog {
	export class DiscodogApp {
		constructor () {
			var data = new FormData();
			data.append("test", "123");
			Api.post("api/test", data, () => {
				alert("great success");
			}, () => {
				alert("massive failure");
			});
		}
	}
}