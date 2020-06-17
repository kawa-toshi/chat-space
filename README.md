# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## usersテーブル

|Column|Type|Options|
|------|----|-------|

|username|string|null: false|
|email|string|null: false|

### Association
- has_many :messages
- has_many :groups, through: :groups_users



## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false, |
|user_id|integer|null:false, foreign_key: true|


### Association
- has_many :messages
- has_many :users, through:groups_users


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|message|text|null: false|
|img|text| |

### Association
- belongs_to :group
- belongs_to :user


