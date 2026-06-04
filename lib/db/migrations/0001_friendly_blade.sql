CREATE TABLE IF NOT EXISTS "contact_requests" (
	"id" serial PRIMARY KEY NOT NULL,
	"first_name" varchar(100) NOT NULL,
	"email" varchar(255) NOT NULL,
	"profile_type" varchar(50),
	"context" text,
	"experience_level" varchar(20),
	"form_type" varchar(30) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
