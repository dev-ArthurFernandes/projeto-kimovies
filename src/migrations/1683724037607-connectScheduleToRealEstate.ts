import { MigrationInterface, QueryRunner } from "typeorm";

export class ConnectScheduleToRealEstate1683724037607 implements MigrationInterface {
    name = 'ConnectScheduleToRealEstate1683724037607'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "schedules_real_estates_real_state" ("schedulesId" integer NOT NULL, "realStateId" integer NOT NULL, CONSTRAINT "PK_b07d87fe10514b399ea12072ff1" PRIMARY KEY ("schedulesId", "realStateId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_3ca75323e4c427e1b354aad15e" ON "schedules_real_estates_real_state" ("schedulesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_88fdad2f4f3a738a8bdbe2c6db" ON "schedules_real_estates_real_state" ("realStateId") `);
        await queryRunner.query(`ALTER TABLE "schedules_real_estates_real_state" ADD CONSTRAINT "FK_3ca75323e4c427e1b354aad15e9" FOREIGN KEY ("schedulesId") REFERENCES "schedules"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "schedules_real_estates_real_state" ADD CONSTRAINT "FK_88fdad2f4f3a738a8bdbe2c6db4" FOREIGN KEY ("realStateId") REFERENCES "real_state"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_real_estates_real_state" DROP CONSTRAINT "FK_88fdad2f4f3a738a8bdbe2c6db4"`);
        await queryRunner.query(`ALTER TABLE "schedules_real_estates_real_state" DROP CONSTRAINT "FK_3ca75323e4c427e1b354aad15e9"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_88fdad2f4f3a738a8bdbe2c6db"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_3ca75323e4c427e1b354aad15e"`);
        await queryRunner.query(`DROP TABLE "schedules_real_estates_real_state"`);
    }

}
