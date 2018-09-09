class ChangeGameColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :games, :score, :user_score
  end
end
