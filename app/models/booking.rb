class Booking < ApplicationRecord
  validates :listing_id, :booker_id, :start_date, :end_date, presence: true
  validates_uniqueness_of :listing_id, :scope => [:start_date, :end_date]

  validate :start_must_come_before_end
  validate :does_not_overlap

  belongs_to :listing

  belongs_to :booker,
    foreign_key: :booker_id,
    class_name: 'User'

  private
  def start_must_come_before_end
    return if start_date < end_date
    debugger
    errors[:start_date] << 'Check in must come before Check out'
    errors[:end_date] << 'Check out must come after Check in'
  end

  def overlapping_bookings
    Booking
      .where(listing_id: listing_id)
      .where.not('start_date > :end_date OR end_date < :start_date',
                 start_date: start_date, end_date: end_date)
  end

  def does_not_overlap
    unless overlapping_bookings.empty?
      errors[:base] << 'Listing is booked on these dates'
    end
  end

end
