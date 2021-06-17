class CreateInputs < ActiveRecord::Migration[6.1]
  def change
    create_table :inputs do |t|
      t.string :name
      t.integer :age
      t.string :country

      t.timestamps
    end
  end
end
