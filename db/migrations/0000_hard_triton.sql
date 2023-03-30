CREATE TABLE `subscribers` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`email` varchar(255) NOT NULL,
	`created_at` datetime NOT NULL DEFAULT NOW()
);
--> statement-breakpoint
CREATE UNIQUE INDEX email_index ON subscribers (`email`);