CREATE TABLE `racing_class` (
	`id` text PRIMARY KEY NOT NULL
);
--> statement-breakpoint
CREATE TABLE `season` (
	`year` text,
	`start` integer,
	`end` integer,
	`racing_class_name` text NOT NULL,
	FOREIGN KEY (`racing_class_name`) REFERENCES `racing_class`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `country` (
	`name` text PRIMARY KEY NOT NULL,
	`continent` text
);
--> statement-breakpoint
CREATE TABLE `team` (
	`name` text PRIMARY KEY NOT NULL,
	`base` text,
	`country_name` text,
	`racing_class_name` text NOT NULL,
	FOREIGN KEY (`country_name`) REFERENCES `country`(`name`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`racing_class_name`) REFERENCES `racing_class`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `driver` (
	`name` text PRIMARY KEY NOT NULL,
	`country_name` text,
	`date_of_birth` integer,
	`team_name` text,
	FOREIGN KEY (`country_name`) REFERENCES `country`(`name`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`team_name`) REFERENCES `team`(`name`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `team_season` (
	`team_name` text NOT NULL,
	`season_year` text NOT NULL,
	`season_racing_class_name` text,
	`points` integer,
	`position` integer,
	FOREIGN KEY (`team_name`) REFERENCES `team`(`name`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`season_year`) REFERENCES `season`(`year`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`season_racing_class_name`) REFERENCES `season`(`racing_class_name`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `driver_season` (
	`driver_name` text NOT NULL,
	`team_name` text NOT NULL,
	`season_year` text NOT NULL,
	`season_racing_class_name` text,
	`points` integer,
	`position` integer,
	FOREIGN KEY (`driver_name`) REFERENCES `driver`(`name`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`team_name`) REFERENCES `team`(`name`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`season_year`) REFERENCES `season`(`year`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`season_racing_class_name`) REFERENCES `season`(`racing_class_name`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `season_year_racing_class_name_unique` ON `season` (`year`,`racing_class_name`);--> statement-breakpoint
CREATE UNIQUE INDEX `team_season_team_name_season_year_season_racing_class_name_unique` ON `team_season` (`team_name`,`season_year`,`season_racing_class_name`);--> statement-breakpoint
CREATE UNIQUE INDEX `driver_season_driver_name_team_name_season_year_unique` ON `driver_season` (`driver_name`,`team_name`,`season_year`);