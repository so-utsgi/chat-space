#chat-spaseのdb設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|name|string|null: false|

### Association
- has_many :groups, through: groups_users
- has_many :users_groups
- has_many :posts
 
## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|title|string|null: false, unique: true|
 
 
### Association
- has_many :users, through: groups_users
- has_many :posts  
- has_many :users_groups

##  postsテーブル
|Column|Type|Options|
|------|----|-------| 
|body|text|
|image|string|
|user_id|integer|null: false, foreign_key: true|
|groups_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user

##  users_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|groups_id|integer|null: false, foreign_key: true|
 
### Association
- belongs_to :group
- belongs_to :user