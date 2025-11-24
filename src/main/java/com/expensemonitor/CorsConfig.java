// This file is not needed for prod, since nginx manages the api calls
package com.expensemonitor;

import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

public class CorsConfig implements WebMvcConfigurer {
    
    @Override
    public void addCorsMappings(CorsRegistry registry) {
            registry.addMapping("/api/**")
            .allowedOrigins("http://localhost:3000", "http://localhost:5173", "http://frontend:80")
            .allowedMethods("GET", "POST", "PUT", "DELETE")
            .allowedHeaders("*")
            .allowCredentials(true)
            .maxAge(3600);
    }
}
