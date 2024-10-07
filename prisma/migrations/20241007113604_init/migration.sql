-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "bank" TEXT NOT NULL,
    "accountNumber" TEXT NOT NULL,
    "paymentListId" INTEGER,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PaymentList" (
    "id" SERIAL NOT NULL,
    "year" INTEGER NOT NULL,
    "referenceMonth" INTEGER NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "PaymentList_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_cpf_key" ON "Student"("cpf");

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_paymentListId_fkey" FOREIGN KEY ("paymentListId") REFERENCES "PaymentList"("id") ON DELETE SET NULL ON UPDATE CASCADE;
