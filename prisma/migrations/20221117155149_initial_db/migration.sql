-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "accountId" INTEGER NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Accounts" (
    "id" SERIAL NOT NULL,
    "balance" TEXT NOT NULL,

    CONSTRAINT "Accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transactions" (
    "id" SERIAL NOT NULL,
    "debitedAccountId" INTEGER NOT NULL,
    "creditedAccountId" INTEGER NOT NULL,

    CONSTRAINT "Transactions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_username_key" ON "Users"("username");

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_debitedAccountId_fkey" FOREIGN KEY ("debitedAccountId") REFERENCES "Accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_creditedAccountId_fkey" FOREIGN KEY ("creditedAccountId") REFERENCES "Accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
