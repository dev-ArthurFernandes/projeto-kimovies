import { MigrationInterface, QueryRunner } from "typeorm";

export class ConnectRealEstateToCategories1683724668380 implements MigrationInterface {
    name = 'ConnectRealEstateToCategories1683724668380'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_state" ADD "categoriesId" integer`);
        await queryRunner.query(`ALTER TABLE "real_state" ADD CONSTRAINT "UQ_624561db5deba35212aab3b62c3" UNIQUE ("categoriesId")`);
        await queryRunner.query(`ALTER TABLE "real_state" ADD CONSTRAINT "FK_624561db5deba35212aab3b62c3" FOREIGN KEY ("categoriesId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_state" DROP CONSTRAINT "FK_624561db5deba35212aab3b62c3"`);
        await queryRunner.query(`ALTER TABLE "real_state" DROP CONSTRAINT "UQ_624561db5deba35212aab3b62c3"`);
        await queryRunner.query(`ALTER TABLE "real_state" DROP COLUMN "categoriesId"`);
    }

}
