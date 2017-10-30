class Review < ApplicationRecord
  validates :rating, inclusion: { in: (1..5) }
  validates :listing_id, :rating, presence: true

  belongs_to :listing
end
