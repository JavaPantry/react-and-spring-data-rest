/*
 * Copyright 2015 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.greglturnquist.payroll;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.nio.file.Files;
import java.nio.file.Paths;


/**
 * @author Greg Turnquist
 */
// tag::code[]
@RestController
public class ClientsController {

	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(value={"/api/clients"}, method = RequestMethod.GET)
	public String mainMenu(HttpServletRequest request) {
		String contents = null;
		try {
			//contents = new String(Files.readAllBytes(Paths.get("static/data/customers.json")));
			contents = new String(Files.readAllBytes(Paths.get(ClassLoader.getSystemResource("static/data/customers.json").toURI())));
		} catch (Exception e) {
			e.printStackTrace();
		}
		System.out.println("Contents: " + contents);

		return contents;
	}
}
// end::code[]