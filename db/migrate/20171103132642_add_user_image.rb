class AddUserImage < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :image_url, :string, :default => "https://upload.wikimedia.org/wikipedia/en/7/75/Koopa_Troopa_3D_Land.png"
  end
end
