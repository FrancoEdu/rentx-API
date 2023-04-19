/* eslint-disable prettier/prettier */
import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";


export class CreateSpecificationCars1681926748380 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "specifications_cars",
                columns: [
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "car_id",
                        type: "uuid",
                    },
                    {
                        name: "specification_id",
                        type: "uuid",
                    },
                ],
            })
        );

        await queryRunner.createForeignKey(
            "specifications_cars",
            new TableForeignKey({
                name: "FKCarID",
                referencedTableName: "cars",
                referencedColumnNames: ["id"],
                columnNames: ["car_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            })
        );

        await queryRunner.createForeignKey(
            "specifications_cars",
            new TableForeignKey({
                name: "FKSpecificationID",
                referencedTableName: "specification",
                referencedColumnNames: ["id"],
                columnNames: ["specification_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("specifications_cars" , "FKCarID");
        await queryRunner.dropForeignKey("specifications_cars", "FKSpecificationID");
        await queryRunner.dropTable("specifications_cars");
    }
}
