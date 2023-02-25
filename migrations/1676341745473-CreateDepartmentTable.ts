import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateDepartmentTable1676341745473 implements MigrationInterface {
  name = 'CreateDepartmentTable1676341745473';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE \`department\` (
                \`id\` bigint NOT NULL AUTO_INCREMENT,
                \`name\` varchar(511) NOT NULL,
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_at\` timestamp(6) NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP TABLE \`department\`
        `);
  }
}
