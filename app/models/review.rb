class Review < ApplicationRecord
  validates :rating, inclusion: { in: (1..5) }
  validates :listing_id, :rating, :user_id, presence: true

  belongs_to :listing
  belongs_to :user
end
