class CreateCountries < ActiveRecord::Migration[6.1]
  def change
    create_table :countries do |t|
      t.string :name
      t.string :flag
      t.string :capital
      t.string :region
      t.integer :population
      t.string :timezones
      t.string :language

      t.timestamps
    end
  end
end
