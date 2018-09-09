class User < ApplicationRecord
    has_many :games, dependent: :destroy

    validates :username, :email, presence: true
    # validates :username, :email, uniqueness: true

    has_secure_password
end
