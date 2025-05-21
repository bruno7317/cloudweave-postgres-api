-- CreateTable
CREATE TABLE "Country" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "money_reserves" DOUBLE PRECISION NOT NULL,
    "flag" TEXT NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Resource" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "base_price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Resource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CountryResource" (
    "id" SERIAL NOT NULL,
    "production" INTEGER NOT NULL,
    "consumption" INTEGER NOT NULL,
    "stockpile" INTEGER NOT NULL,
    "country_id" INTEGER NOT NULL,
    "resource_id" INTEGER NOT NULL,

    CONSTRAINT "CountryResource_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Country_name_key" ON "Country"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Resource_name_key" ON "Resource"("name");

-- AddForeignKey
ALTER TABLE "CountryResource" ADD CONSTRAINT "CountryResource_country_id_fkey" FOREIGN KEY ("country_id") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CountryResource" ADD CONSTRAINT "CountryResource_resource_id_fkey" FOREIGN KEY ("resource_id") REFERENCES "Resource"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
