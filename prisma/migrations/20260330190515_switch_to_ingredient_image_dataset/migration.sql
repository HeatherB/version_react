/*
  Warnings:

  - You are about to drop the column `contributor_id` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `minutes` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `n_ingredients` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `n_steps` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `nutrition` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `steps` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `submitted` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `tags` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the `interactions` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `cleaned_ingredients` to the `recipes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `instructions` to the `recipes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `recipes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "interactions" DROP CONSTRAINT "interactions_recipe_id_fkey";

-- AlterTable
CREATE SEQUENCE recipes_id_seq;
ALTER TABLE "recipes" DROP COLUMN "contributor_id",
DROP COLUMN "description",
DROP COLUMN "minutes",
DROP COLUMN "n_ingredients",
DROP COLUMN "n_steps",
DROP COLUMN "name",
DROP COLUMN "nutrition",
DROP COLUMN "steps",
DROP COLUMN "submitted",
DROP COLUMN "tags",
ADD COLUMN     "cleaned_ingredients" TEXT NOT NULL,
ADD COLUMN     "image_name" TEXT,
ADD COLUMN     "instructions" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL,
ALTER COLUMN "id" SET DEFAULT nextval('recipes_id_seq');
ALTER SEQUENCE recipes_id_seq OWNED BY "recipes"."id";

-- DropTable
DROP TABLE "interactions";
