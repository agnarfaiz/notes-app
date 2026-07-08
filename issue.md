# Database, Migrations, and Models Setup

This document outlines the high-level tasks to implement the database schema, migrations, and model relationships for the Notes Application in Laravel.

## 1. Database Migrations

### Users Table Migration
Modify the existing user migration (`create_users_table`) to match the following schema:
- `id`: Primary key, auto-increment (BigInteger unsigned)
- `name`: String, max length 100, not null
- `email`: String, max length 255, unique, not null
- `password`: String, max length 255, not null
- `created_at` / `updated_at`: Nullable timestamps

### Notes Table Migration
Create a new migration (`create_notes_table`) with the following schema:
- `id`: Primary key, auto-increment (BigInteger unsigned)
- `user_id`: Foreign key (BigInteger unsigned), not null. Must reference the `users` table with `constrained()` and `cascadeOnDelete()` rules.
- `title`: String, max length 255, not null
- `content`: Text, not null
- `created_at` / `updated_at`: Nullable timestamps

---

## 2. Eloquent Models & Relationships

### User Model
Update the `App\Models\User` model to establish a relationship with the `Note` model:
- Define a `notes()` method establishing a **One-to-Many** relationship (`hasMany`) pointing to the `Note` model.

### Note Model
Create a new `App\Models\Note` model:
- Define a `user()` method establishing a **BelongsTo** relationship (`belongsTo`) pointing to the `User` model.
- Configure appropriate `$fillable` fields (`user_id`, `title`, `content`).

---

## 3. Verification & Execution
- Run `php artisan migrate:fresh` to re-create the tables with the updated schemas.
- (Optional) Use Laravel Tinker or a simple database query to verify that the tables are created with the correct columns, indexes, and constraints.
