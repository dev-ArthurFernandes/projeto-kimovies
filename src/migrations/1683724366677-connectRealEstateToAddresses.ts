import { MigrationInterface, QueryRunner } from "typeorm";

export class ConnectRealEstateToAddresses1683724366677 implements MigrationInterface {
    name = 'ConnectRealEstateToAddresses1683724366677'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_state" ADD "addressId" integer`);
        await queryRunner.query(`ALTER TABLE "real_state" ADD CONSTRAINT "UQ_05088449764d42ca807c1b09fc1" UNIQUE ("addressId")`);
        await queryRunner.query(`ALTER TABLE "real_state" ADD CONSTRAINT "FK_05088449764d42ca807c1b09fc1" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_state" DROP CONSTRAINT "FK_05088449764d42ca807c1b09fc1"`);
        await queryRunner.query(`ALTER TABLE "real_state" DROP CONSTRAINT "UQ_05088449764d42ca807c1b09fc1"`);
        await queryRunner.query(`ALTER TABLE "real_state" DROP COLUMN "addressId"`);
    }

}
