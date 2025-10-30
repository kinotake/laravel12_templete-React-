// Generated from migrations in database/migrations. Keep in sync with schema changes.

type Timestamp = string;
type Nullable<T> = T | null;

export type UsersTable = {
    id: number;
    name: string;
    email: string;
    img: Nullable<string>;
    energy: number;
    email_verified_at: Nullable<Timestamp>;
    password: string;
    remember_token: Nullable<string>;
    two_factor_secret: Nullable<string>;
    two_factor_recovery_codes: Nullable<string>;
    two_factor_confirmed_at: Nullable<Timestamp>;
    created_at: Timestamp;
    updated_at: Timestamp;
};

export type DepartmentsTable = {
    id: number;
    name: string;
    created_at: Timestamp;
    updated_at: Timestamp;
};

export type NoticesTable = {
    id: number;
    department_id: number;
    title: string;
    content: string;
    created_at: Timestamp;
    updated_at: Timestamp;
};

export type TodosTable = {
    id: number;
    user_id: number;
    department_id: Nullable<number>;
    title: Nullable<string>;
    slack_url: Nullable<string>;
    content: string;
    created_at: Timestamp;
    updated_at: Timestamp;
};

export type SchedulesTable = {
    id: number;
    detail: string;
    start: Timestamp;
    end: Timestamp;
    department_id: number;
    user_id: number;
    created_at: Timestamp;
    updated_at: Timestamp;
};

export type TweetsTable = {
    id: number;
    user_id: number;
    content: string;
    created_at: Timestamp;
    updated_at: Timestamp;
};

export type DepartmentUserTable = {
    id: number;
    department_id: number;
    user_id: number;
    created_at: Timestamp;
    updated_at: Timestamp;
};

export type NoticeUserTable = {
    id: number;
    user_id: number;
    notice_id: number;
    created_at: Timestamp;
    updated_at: Timestamp;
};
