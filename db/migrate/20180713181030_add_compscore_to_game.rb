class AddCompscoreToGame < ActiveRecord::Migration[5.2]
  def change
    add_column :games, :comp_score, :string
  end
end
