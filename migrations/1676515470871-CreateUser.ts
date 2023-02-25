import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUser1676515470871 implements MigrationInterface {
  name = 'CreateUser1676515470871';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE \`user\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`phone_number\` varchar(13) NOT NULL,
                \`password\` varchar(255) NOT NULL,
                \`type\` enum ('admin', 'driver', 'operator') NULL,
                \`is_adminstrator\` tinyint NOT NULL DEFAULT 0,
                \`sid\` varchar(64) NULL,
                \`full_name\` varchar(255) NULL,
                \`email\` varchar(255) NULL,
                \`profile_img\` varchar(255) NULL,
                \`status\` tinyint NOT NULL DEFAULT 1,
                \`department_id\` bigint NOT NULL,
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_at\` timestamp(6) NULL,
                UNIQUE INDEX \`IDX_01eea41349b6c9275aec646eee\` (\`phone_number\`),
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
    await queryRunner.query(`
            ALTER TABLE \`user\`
            ADD CONSTRAINT \`FK_afd2c87bee70dd5557f48911e66\` FOREIGN KEY (\`department_id\`) REFERENCES \`department\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_afd2c87bee70dd5557f48911e66\`
        `);
    await queryRunner.query(`
            DROP INDEX \`IDX_01eea41349b6c9275aec646eee\` ON \`user\`
        `);
    await queryRunner.query(`
            DROP TABLE \`user\`
        `);
  }
}
