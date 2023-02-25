import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateRolePermission1676529653806 implements MigrationInterface {
  name = 'createRolePermission1676529653806';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE \`permission\` (
                \`id\` bigint NOT NULL AUTO_INCREMENT,
                \`action\` varchar(255) NOT NULL,
                \`resource\` varchar(255) NOT NULL,
                \`name\` varchar(255) NOT NULL,
                \`group\` varchar(255) NOT NULL,
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_at\` timestamp(6) NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
    await queryRunner.query(`
            CREATE TABLE \`role\` (
                \`id\` bigint NOT NULL AUTO_INCREMENT,
                \`name\` varchar(255) NOT NULL,
                \`description\` varchar(255) NOT NULL,
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_at\` timestamp(6) NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
    await queryRunner.query(`
            CREATE TABLE \`role_permission\` (
                \`permission_id\` bigint NOT NULL,
                \`role_id\` bigint NOT NULL,
                INDEX \`IDX_e3a3ba47b7ca00fd23be4ebd6c\` (\`permission_id\`),
                INDEX \`IDX_3d0a7155eafd75ddba5a701336\` (\`role_id\`),
                PRIMARY KEY (\`permission_id\`, \`role_id\`)
            ) ENGINE = InnoDB
        `);
    await queryRunner.query(`
            ALTER TABLE \`role_permission\`
            ADD CONSTRAINT \`FK_e3a3ba47b7ca00fd23be4ebd6cf\` FOREIGN KEY (\`permission_id\`) REFERENCES \`permission\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE
        `);
    await queryRunner.query(`
            ALTER TABLE \`role_permission\`
            ADD CONSTRAINT \`FK_3d0a7155eafd75ddba5a7013368\` FOREIGN KEY (\`role_id\`) REFERENCES \`role\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`role_permission\` DROP FOREIGN KEY \`FK_3d0a7155eafd75ddba5a7013368\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`role_permission\` DROP FOREIGN KEY \`FK_e3a3ba47b7ca00fd23be4ebd6cf\`
        `);
    await queryRunner.query(`
            DROP INDEX \`IDX_3d0a7155eafd75ddba5a701336\` ON \`role_permission\`
        `);
    await queryRunner.query(`
            DROP INDEX \`IDX_e3a3ba47b7ca00fd23be4ebd6c\` ON \`role_permission\`
        `);
    await queryRunner.query(`
            DROP TABLE \`role_permission\`
        `);
    await queryRunner.query(`
            DROP TABLE \`role\`
        `);
    await queryRunner.query(`
            DROP TABLE \`permission\`
        `);
  }
}
