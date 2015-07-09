package nl.ordina.polyglot.challenger;

import javax.ws.rs.GET;
import javax.ws.rs.Path;

/**
 * Created by steven on 08-07-15.
 */

@Path("user")
public class UserResource {

    @GET
    @Path("hello")
    public String hello() {
        return "hello";
    }
}
