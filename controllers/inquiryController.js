const Inquiry = require('../models/Inquiry');

// @desc    Submit a new contact / customer inquiry
// @route   POST /api/inquiries
// @access  Public
const createInquiry = async (req, res) => {
  try {
    const { fullName, email, phone, enquiryType, message } = req.body;

    if (!fullName || !fullName.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Full name is required',
      });
    }

    if (!email || !email.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Email address is required',
      });
    }

    const inquiry = await Inquiry.create({
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone ? phone.trim() : '',
      enquiryType: enquiryType ? enquiryType.trim() : 'General Business Enquiry',
      message: message ? message.trim() : '',
      status: 'new',
    });

    return res.status(201).json({
      success: true,
      message: 'Inquiry submitted successfully',
      inquiry,
    });
  } catch (error) {
    console.error('Error submitting inquiry:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to submit inquiry',
      error: error.message,
    });
  }
};

// @desc    Get all inquiries (with metrics and filters)
// @route   GET /api/inquiries
// @access  Private (Admin)
const getAllInquiries = async (req, res) => {
  try {
    const { status, search } = req.query;
    const filter = {};

    if (status && status !== 'all') {
      filter.status = status;
    }

    if (search && search.trim()) {
      const searchRegex = new RegExp(search.trim(), 'i');
      filter.$or = [
        { fullName: searchRegex },
        { email: searchRegex },
        { phone: searchRegex },
        { enquiryType: searchRegex },
        { message: searchRegex },
      ];
    }

    const inquiries = await Inquiry.find(filter).sort({ createdAt: -1 });

    // Aggregate counts for dashboard counters
    const [totalCount, newCount, inProgressCount, resolvedCount] = await Promise.all([
      Inquiry.countDocuments(),
      Inquiry.countDocuments({ status: 'new' }),
      Inquiry.countDocuments({ status: 'in-progress' }),
      Inquiry.countDocuments({ status: 'resolved' }),
    ]);

    return res.status(200).json({
      success: true,
      inquiries,
      metrics: {
        total: totalCount,
        new: newCount,
        inProgress: inProgressCount,
        resolved: resolvedCount,
      },
    });
  } catch (error) {
    console.error('Error fetching inquiries:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch inquiries',
      error: error.message,
    });
  }
};

// @desc    Update inquiry status
// @route   PATCH /api/inquiries/:id/status
// @access  Private (Admin)
const updateInquiryStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const validStatuses = ['new', 'read', 'in-progress', 'resolved', 'archived'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: `Invalid status. Must be one of: ${validStatuses.join(', ')}`,
      });
    }

    const inquiry = await Inquiry.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true }
    );

    if (!inquiry) {
      return res.status(404).json({
        success: false,
        message: 'Inquiry not found',
      });
    }

    return res.status(200).json({
      success: true,
      message: `Inquiry status marked as ${status}`,
      inquiry,
    });
  } catch (error) {
    console.error('Error updating inquiry status:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to update inquiry status',
      error: error.message,
    });
  }
};

// @desc    Delete inquiry
// @route   DELETE /api/inquiries/:id
// @access  Private (Admin)
const deleteInquiry = async (req, res) => {
  try {
    const { id } = req.params;
    const inquiry = await Inquiry.findByIdAndDelete(id);

    if (!inquiry) {
      return res.status(404).json({
        success: false,
        message: 'Inquiry not found',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Inquiry deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting inquiry:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to delete inquiry',
      error: error.message,
    });
  }
};

module.exports = {
  createInquiry,
  getAllInquiries,
  updateInquiryStatus,
  deleteInquiry,
};
