class UserSerializer < ActiveModel::Serializer
    attributes :username, :email, :password

    has_many :games
  end