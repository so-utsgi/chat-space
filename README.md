#chat-spaseのdb設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|name|string|null: false|

### Association
- has_many :users_groups
- has_many :posts

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|title|text|
 
 
### Association
- has_many :posts  
- has_many :users_groups

##  postsテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|null: false, foreign_key: true|
|iaage|string|null: false, foreign_key: true|
 
### Association
- belongs_to :groups
- belongs_to :user

##  users_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|groups_id|integer|null: false, foreign_key: true|
 
### Association
- belongs_to :groups
- belongs_to :user