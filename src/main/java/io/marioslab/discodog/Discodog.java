
package io.marioslab.discodog;

import java.security.MessageDigest;

import com.esotericsoftware.minlog.Log;

import io.javalin.Javalin;
import io.javalin.embeddedserver.Location;
import io.marioslab.basis.arguments.Arguments;
import io.marioslab.basis.arguments.Arguments.ParsedArguments;
import io.marioslab.basis.site.BasisSite;

public class Discodog {
	public static void main (String[] cliArgs) {
		Arguments args = BasisSite.createDefaultArguments();

		ParsedArguments parsed;
		BasisSite site;
		try {
			parsed = args.parse(cliArgs);
			site = new BasisSite(parsed);
		} catch (Throwable e) {
			Log.error(e.getMessage());
			Log.debug("Exception", e);
			args.printHelp();
			System.exit(-1);
			return; // never reached
		}

		Thread generatorThread = new Thread((Runnable) () -> {
			try {
				site.generate();
			} catch (Throwable t) {
				Log.error(t.getMessage());
				Log.debug("Exception", t);
			}
		});
		generatorThread.setDaemon(true);
		generatorThread.start();

		Javalin app = Javalin.create().enableDynamicGzip().enableStaticFiles("output", Location.EXTERNAL).port(8000).start();

		app.post("/api/test", ctx -> {
			String pwd = ctx.formParam("test");
			ctx.response().getWriter().println("OK.");
		});
	}
}
