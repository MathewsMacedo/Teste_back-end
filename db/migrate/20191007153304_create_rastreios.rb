class CreateRastreios < ActiveRecord::Migration[5.2]
  def change
    create_table :rastreios do |t|
      t.string :guid
      t.string :url
      t.string :data

      t.timestamps
    end
  end
end
