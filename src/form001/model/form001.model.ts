import {
    AllowNull,
    Column,
    Model,
    PrimaryKey,
    Table,
    AutoIncrement,
} from 'sequelize-typescript';

@Table({
    timestamps: true,
    paranoid: true,
})
export class Form001 extends Model<Form001> {
    @AllowNull(false)
    @PrimaryKey
    @AutoIncrement
    @Column
    o_id: number;

    @AllowNull(true)
    @Column
    o_no: string;

    @AllowNull(true)
    @Column
    o_date: string;

    @AllowNull(true)
    @Column
    o_year: string;

    @AllowNull(true)
    @Column
    o_purpose: string;

    @AllowNull(true)
    @Column
    o_committee1: string;

    @AllowNull(true)
    @Column
    o_committee2: string;

    @AllowNull(true)
    @Column
    o_committee3: string;

    @AllowNull(true)
    @Column
    o_numdoc: number;

    @AllowNull(true)
    @Column
    o_pricedoc: number;

    @AllowNull(true)
    @Column
    o_committee4: string;

    @AllowNull(true)
    @Column
    o_committee5: string;

    @AllowNull(true)
    @Column
    o_committee6: string;

    @AllowNull(true)
    @Column
    o_budgettype: string;

    @AllowNull(true)
    @Column
    o_budgetname: string;

    @AllowNull(true)
    @Column
    o_budgetdoc: number;

    @AllowNull(true)
    @Column
    o_approve: string;

    @AllowNull(true)
    @Column
    o_approver: string;

    @AllowNull(true)
    @Column
    staff_id: string;

    @AllowNull(true)
    @Column
    o_status: string;

    @AllowNull(true)
    @Column
    o_status_id: number;

    @AllowNull(true)
    @Column
    o_user: string;

    @AllowNull(true)
    @Column
    o_test: string;
}