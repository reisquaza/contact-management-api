import { MigrationInterface, QueryRunner } from "typeorm";

export class User1675358920035 implements MigrationInterface {
    name = 'User1675358920035'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "telephone" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "telephone"`);
    }

}
