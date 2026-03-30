-- CreateTable
CREATE TABLE "recipes" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "minutes" INTEGER NOT NULL,
    "contributor_id" INTEGER NOT NULL,
    "submitted" TIMESTAMP(3) NOT NULL,
    "tags" TEXT NOT NULL,
    "nutrition" TEXT NOT NULL,
    "n_steps" INTEGER NOT NULL,
    "steps" TEXT NOT NULL,
    "description" TEXT,
    "ingredients" TEXT NOT NULL,
    "n_ingredients" INTEGER NOT NULL,

    CONSTRAINT "recipes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "interactions" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "recipe_id" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "rating" INTEGER NOT NULL,
    "review" TEXT,

    CONSTRAINT "interactions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "interactions" ADD CONSTRAINT "interactions_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "recipes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
