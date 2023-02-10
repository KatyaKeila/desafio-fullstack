import { MigrationInterface, QueryRunner } from "typeorm";

export class updateTables1675877093183 implements MigrationInterface {
    name = 'updateTables1675877093183'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "telephone" character varying(11) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "isAdm" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "createdAt" date NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "isAdm"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "telephone"`);
    }

}
