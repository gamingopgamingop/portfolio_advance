class BlogPost < ApplicationRecord
  validates :title, presence: true
  validates :content, presence: true
  validates :author, presence: true
  
  scope :published, -> { where(published: true) }
  scope :recent, -> { order(created_at: :desc) }
end