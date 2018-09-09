require 'jwt'
require 'Auth'

class Api::UsersController < ApplicationController
    # before_action :authenticate_user!, except: [:create]

    def index
      render json: User.all
    end
  
    def create
      @user = User.new
      @user.username = params["userInfo"]["username"]
      @user.email = params["userInfo"]["email"]
      @user.password = params["userInfo"]["password"]

      if @user.save
        render json: { user: Auth.create_token(@user) }
      else
        render json: { errors: { message: @user.errors } }, status: 401
      end
    end
  
    def show
      render json: @user
    end
  
    def edit
      @user.user_cities.build.build_city
    end
  
    def update
      if @user.update(user_params)
        render json: @user
      else
        render json: { errors: { message: @user.errors } }, status: 401
      end
    end
  

end