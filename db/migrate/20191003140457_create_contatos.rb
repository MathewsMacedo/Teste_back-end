class CreateContatos < ActiveRecord::Migration[5.2]
  def change
    create_table :contatos do |t|
      t.string :nome
      t.string :email, null: false, index: {unique: true}
      t.string :telefone
      t.text :mensagem

      t.timestamps
    end
  end
end
