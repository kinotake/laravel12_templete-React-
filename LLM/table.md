todos_table
| カラム名       | 型         | 説明           |
| ---------- | --------- | ------------ |
| id         | bigint    | 主キー          |
| user_id    | bigint    | ユーザーID（外部キー） |
| content    | text      | TODOの内容      |
| created_at | timestamp | 作成日時         |
| updated_at | timestamp | 更新日時         |

notice_user_table
| カラム名       | 型         | 説明           |
| ---------- | --------- | ------------ |
| id         | bigint    | 主キー          |
| user_id    | bigint    | ユーザーID（外部キー） |
| notice_id  | bigint    | お知らせID（外部キー） |
| created_at | timestamp | 作成日時         |
| updated_at | timestamp | 更新日時         |

notices_table
| カラム名          | 型         | 説明         |
| ------------- | --------- | ---------- |
| id            | bigint    | 主キー        |
| department_id | bigint    | 部署ID（外部キー） |
| content       | text      | お知らせ内容     |
| created_at    | timestamp | 作成日時       |
| updated_at    | timestamp | 更新日時       |

departments_table
| カラム名       | 型            | 説明   |
| ---------- | ------------ | ---- |
| id         | bigint       | 主キー  |
| name       | varchar(255) | 部署名  |
| created_at | timestamp    | 作成日時 |
| updated_at | timestamp    | 更新日時 |

department_user_table
| カラム名          | 型         | 説明           |
| ------------- | --------- | ------------ |
| id            | bigint    | 主キー          |
| department_id | bigint    | 部署ID（外部キー）   |
| user_id       | bigint    | ユーザーID（外部キー） |
| created_at    | timestamp | 作成日時         |
| updated_at    | timestamp | 更新日時         |

tweets_table
| カラム名       | 型         | 説明           |
| ---------- | --------- | ------------ |
| id         | bigint    | 主キー          |
| user_id    | bigint    | ユーザーID（外部キー） |
| content    | text      | 投稿内容         |
| created_at | timestamp | 作成日時         |
| updated_at | timestamp | 更新日時         |
