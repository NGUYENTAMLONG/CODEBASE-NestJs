import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateAttachment1676364328975 implements MigrationInterface {
  name = 'CreateAttachment1676364328975';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE \`attachment\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`name\` varchar(255) NULL,
                \`key\` varchar(255) NULL,
                \`type\` varchar(255) NOT NULL DEFAULT 'other',
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_at\` timestamp(6) NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP TABLE \`attachment\`
        `);
  }
}
