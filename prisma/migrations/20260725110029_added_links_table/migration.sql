-- CreateTable
CREATE TABLE "Link" (
    "id" TEXT NOT NULL,
    "originalLink" TEXT NOT NULL,
    "shortCode" TEXT NOT NULL,
    "clicked" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Link_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Link_originalLink_key" ON "Link"("originalLink");

-- CreateIndex
CREATE UNIQUE INDEX "Link_shortCode_key" ON "Link"("shortCode");
