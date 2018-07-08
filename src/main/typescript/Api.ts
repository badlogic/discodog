module discodog {
	export class Api {
		public static post(endPoint: string, data: FormData, success: (data: any) => void, error: (e: any) => void) {
			let request = new XMLHttpRequest();
			request.open("POST", endPoint, true);
			request.onload = (ev: Event) => {
				if (request.status == 200) {
					success(request.responseText);
				} else {
					error(request.responseText);
				}
			};
			request.onerror = (ev: ErrorEvent) => {
				error(request.responseText);
			}
			request.send(data);
			return request;
		}
	}
}