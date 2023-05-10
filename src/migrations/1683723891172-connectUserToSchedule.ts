import { MigrationInterface, QueryRunner } from "typeorm";

export class ConnectUserToSchedule1683723891172 implements MigrationInterface {
    name = 'ConnectUserToSchedule1683723891172'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "schedules_users_users" ("schedulesId" integer NOT NULL, "usersId" integer NOT NULL, CONSTRAINT "PK_176d8919b0406393e50a9b724ae" PRIMARY KEY ("schedulesId", "usersId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_4a0e9f7c4a38aa14db644bb2b0" ON "schedules_users_users" ("schedulesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_28d023c550c64878f4026cc3bc" ON "schedules_users_users" ("usersId") `);
        await queryRunner.query(`ALTER TABLE "schedules_users_users" ADD CONSTRAINT "FK_4a0e9f7c4a38aa14db644bb2b08" FOREIGN KEY ("schedulesId") REFERENCES "schedules"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "schedules_users_users" ADD CONSTRAINT "FK_28d023c550c64878f4026cc3bc2" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_users_users" DROP CONSTRAINT "FK_28d023c550c64878f4026cc3bc2"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_users" DROP CONSTRAINT "FK_4a0e9f7c4a38aa14db644bb2b08"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_28d023c550c64878f4026cc3bc"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_4a0e9f7c4a38aa14db644bb2b0"`);
        await queryRunner.query(`DROP TABLE "schedules_users_users"`);
    }

}
